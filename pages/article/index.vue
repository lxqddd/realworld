<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ articleDetail.title }}</h1>

        <div class="article-meta">
          <div @click="jumpToProfile" style="display: inline-block;" v-if="articleDetail.author">
            <span><img :src="articleDetail.author.image"/></span>
            <div class="info">
              <span class="author">{{ articleDetail.author.username }}</span>
              <span class="date">{{ articleDetail.updateAt | date('MMM DD,YYYY') }}</span>
            </div>
          </div>

          <button class="btn btn-sm btn-outline-secondary" @click="followOrCancelFollowCurAuthor">
            <i class="ion-plus-round"></i>
            &nbsp;
            {{ articleDetail.author && articleDetail.author.following ? 'UnFollow' : 'Follow' }}
            {{ articleDetail.author ? articleDetail.author.username : '' }}
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary" @click="favoOrCancelFavoCurArticle">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">({{ articleDetail.favoritesCount }})</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
            {{ articleDetail.body }}
          </p>
          <p>{{ articleDetail.description }}</p>
        </div>
      </div>
      <ul class="tag-list">
        <li
          class="tag-default tag-pill tag-outline"
          v-for="(tag, index) in articleDetail.tagList"
          :key="index"
        >
          {{ tag }}
        </li>
      </ul>
      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <div @click="jumpToProfile" style="display: inline-block;" v-if="articleDetail.author">
            <span><img :src="articleDetail.author.image"/></span>
            <div class="info">
              <span class="author">{{ articleDetail.author.username }}</span>
              <span class="date">{{ articleDetail.updateAt | date('MMM DD, YYYY') }}</span>
            </div>
          </div>
          <button class="btn btn-sm btn-outline-secondary" @click="followOrCancelFollowCurAuthor">
            <i class="ion-plus-round"></i>
            &nbsp;
            {{ articleDetail.author && articleDetail.author.following ? 'UnFollow' : 'Follow' }}
            {{ articleDetail.author ? articleDetail.author.username : '' }}
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary" @click="favoOrCancelFavoCurArticle">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">({{ articleDetail.favoritesCount }})</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
              <img :src="user.image" class="comment-author-img" />
              <button class="btn btn-sm btn-primary" @click.prevent="postComment">
                Post Comment
              </button>
            </div>
          </form>

          <div class="card" v-for="comment in commentList" :key="comment.id">
            <div class="card-block">
              <p class="card-text">
                {{ comment.body }}
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author" v-if="comment.author">
                <img :src="comment.author.image" class="comment-author-img" />
              </a>
              &nbsp;
              <a href="" class="comment-author" v-if="comment.author">{{
                comment.author.username
              }}</a>
              <span class="date-posted">{{ comment.updateAt | date('MMM DD, YYYY') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticleDetail,
  getCommentList,
  favoriteArticle,
  cancelFavoriteArticle
} from '../../apis/article'
import { followProfile, cancelFollowProfile } from '../../apis/profile'
import { mapState } from 'vuex'
export default {
  name: 'Article',
  data() {
    return {
      slug: '',
      articleDetail: {},
      commentList: {}
    }
  },
  async created() {
    this.slug = this.$route.query.slug
    await this.getArticleDetail()
    await this.getArticleCommentList()
    this.$set(this.articleDetail, 'disabledFollow', false)
    this.$set(this.articleDetail, 'disabledFavo', false)
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async getArticleDetail() {
      try {
        const res = await getArticleDetail(this.slug)
        this.articleDetail = res.article
        console.log(this.articleDetail)
      } catch (error) {
        console.error(error)
      }
    },

    async getArticleCommentList() {
      try {
        const res = await getCommentList(this.slug)
        this.commentList = res.comments
        console.log(this.commentList)
      } catch (error) {
        console.error(error)
      }
    },

    jumpToProfile() {
      this.$router.push({
        path: '/profile',
        query: {
          username: this.articleDetail.author.username
        }
      })
    },

    async followOrCancelFollowCurAuthor() {
      if (this.articleDetail.disabledFollow) {
        return
      }
      this.articleDetail.disabledFollow = true
      try {
        if (this.articleDetail.author.following) {
          await cancelFollowProfile(this.articleDetail.author.username)
          this.articleDetail.author.following = false
        } else {
          await followProfile(this.articleDetail.author.username)
          this.articleDetail.author.following = true
        }
      } catch (error) {
        console.error(error)
      }
      this.articleDetail.disabledFollow = false
    },

    async favoOrCancelFavoCurArticle() {
      if (this.articleDetail.disabledFavo) {
        return
      }
      this.articleDetail.disabledFavo = true
      try {
        if (this.articleDetail.favorited) {
          await cancelFavoriteArticle(this.articleDetail.slug)
          this.articleDetail.favorited = false
          this.articleDetail.favoritesCount -= 1
        } else {
          await favoriteArticle(this.articleDetail.slug)
          this.articleDetail.favorited = true
          this.articleDetail.favoritesCount += 1
        }
      } catch (error) {
        console.error(error)
      }
      this.articleDetail.disabledFavo = false
    },

    postComment() {
      // 发布评论
    }
  }
}
</script>

<style></style>
