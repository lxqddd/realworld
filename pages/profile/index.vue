<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profileUserInfo.image" class="user-img" />
            <h4>{{ profileUserInfo.username }}</h4>
            <p>
              {{ profileUserInfo.bio }}
            </p>
            <button
              v-if="isSelf"
              class="btn btn-sm btn-outline-secondary action-btn"
              @click="jumpToEdit"
            >
              <i class="ion-gear-a"></i>
              &nbsp; Edit Profile Settings
            </button>
            <button
              v-else
              class="btn btn-sm btn-outline-secondary action-btn"
              @click="handleOrCancelFollow(profileUserInfo)"
              :disabled="profileUserInfo.disabledFollow"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              {{
                profileUserInfo.following
                  ? `Unfollow ${profileUserInfo.username}`
                  : `Follow ${profileUserInfo.username}`
              }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-for="item in tabMap" :key="item" @click="changeTab(item)">
                <span class="nav-link" :class="curSelectTab === item && 'active'" v-if="item">{{
                  item
                }}</span>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <ArticleItem :article="article" :isSelf="curSelectTab === 'My Articles'" />
          </div>
        </div>
        <Pagination
          @setPage="setPage"
          @setOffset="setOffset"
          :pageSize="pageSize"
          :total="totalPages"
          :curPage="curPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  getProfileUserInfo,
  followProfile,
  cancelFollowProfile,
  getMyArticles,
  getMyFavoArticles
} from '../../apis/profile'
import Pagination from '../../components/Pagination'
import ArticleItem from '../../components/ArticleItem'
import { mapState } from 'vuex'
export default {
  name: 'UserProfile',
  middleware: 'authenticated',
  components: {
    Pagination,
    ArticleItem
  },
  data() {
    return {
      profileUserInfo: {},
      tabMap: {
        my: 'My Articles',
        favo: 'Favorited Articles'
      },
      curSelectTab: 'My Articles',
      articles: [],
      articlesCount: 0,
      curPage: 1,
      pageSize: 10,
      totalPages: 0
    }
  },
  async created() {
    await this.getProfileUserInfo()
    await this.initArticlesOfTab('My Articles', this.profileUserInfo.username)
    this.totalPages = Math.ceil(this.articlesCount / this.pageSize)
    this.$set(this.profileUserInfo, 'disabledFollow', false)
  },

  computed: {
    ...mapState(['user']),
    isSelf() {
      return this.user.username === this.profileUserInfo.username
    }
  },

  methods: {
    async getProfileUserInfo() {
      try {
        const { profile } = await getProfileUserInfo(this.$route.query.username)
        this.profileUserInfo = profile
      } catch (error) {
        console.error(error)
      }
    },

    jumpToEdit() {
      this.$router.push({
        path: '/settings'
      })
    },

    async handleOrCancelFollow(userInfo) {
      if (this.profileUserInfo.disabledFollow) {
        return
      }
      this.profileUserInfo.disabledFollow = true
      const { following, username } = userInfo
      try {
        if (following) {
          // 取消关注
          await followProfile(username)
          userInfo.following = false
        } else {
          // 添加关注
          await cancelFollowProfile(username)
          userInfo.following = true
        }
      } catch (error) {
        console.error(error)
      }
      this.profileUserInfo.disabledFollow = false
    },

    async changeTab(tab) {
      this.curSelectTab = tab
      await this.initArticlesOfTab(tab, this.profileUserInfo.username, 0, 10)
    },

    async initArticlesOfTab(tab, authorName, curPage = 0, pageSize = 10) {
      switch (tab) {
        case 'My Articles':
          await this.getMyArticles(authorName, curPage, pageSize)
          break
        case 'Favorited Articles':
          await this.getFavoArticle(authorName, curPage, pageSize)
          break
      }
      this.totalPages = Math.ceil(this.articlesCount / this.pageSize)
    },

    async getMyArticles(authorName, curPage, pageSize) {
      try {
        const { articles, articlesCount } = await getMyArticles({
          authorName,
          offset: curPage,
          pageSize
        })
        this.articles = articles
        this.articlesCount = articlesCount
      } catch (error) {
        console.error(error)
      }
    },

    async getFavoArticle(authorName, curPage, pageSize) {
      try {
        const { articles, articlesCount } = await getMyFavoArticles({
          username: authorName,
          offset: curPage,
          pageSize
        })
        this.articles = articles
        this.articlesCount = articlesCount
      } catch (error) {
        console.error(error)
      }
    },

    async setPage(page) {
      this.curPage = page
      console.log(this.curPage)
      await this.initArticlesOfTab(this.curSelectTab, this.profileUserInfo.username, this.curPage)
    },

    async setOffset(offset) {
      this.pageSize = offset
      this.curPage = 1
      await this.initArticlesOfTab(
        this.curSelectTab,
        this.profileUserInfo.username,
        this.curPage - 1,
        this.pageSize
      )
    }
  }
}
</script>

<style></style>
