<template>
  <div>
    <div class="article-meta">
      <span @click="jumpToProfile(article.author.username)">
        <img :src="article.author.image" />
      </span>
      <div class="info">
        <span class="author" @click="jumpToProfile(article.author.username)">{{
          article.author.username
        }}</span>
        <span class="date">{{ article.createdAt | date('MMM DD,YYYY') }}</span>
      </div>
      <button
        class="btn btn-sm btn-outline-primary pull-xs-right"
        :class="article.favorited ? 'active' : ''"
        :disabled="article.disabled"
        @click="handleOrCancelFavorite(article)"
      >
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <div class="preview-link" @click="handlePreviewArticle(article)">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </div>
  </div>
</template>

<script>
import { favoriteArticle, cancelFavoriteArticle } from '../../apis/article'
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    this.$set(this.article, 'disabled', false)
  },
  methods: {
    jumpToProfile(username) {
      this.$router.push({
        path: '/profile',
        query: {
          username
        }
      })
    },
    async handleOrCancelFavorite(article) {
      // 防止连续点击多次
      if (this.article.disabled) {
        return
      }
      this.article.disabled = true
      if (article.favorited) {
        this.cancelFavoriteArticle(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      } else {
        await this.favoriteArticle(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      this.article.disabled = false
    },

    async favoriteArticle(articleSlug) {
      try {
        favoriteArticle(articleSlug)
      } catch (error) {
        console.error(error)
      }
    },

    async cancelFavoriteArticle(articleSlug) {
      try {
        await cancelFavoriteArticle(articleSlug)
      } catch (error) {
        console.error(error)
      }
    },

    handlePreviewArticle(article) {
      this.$router.push({
        path: '/article',
        query: {
          slug: article.slug
        }
      })
    }
  }
}
</script>

<style></style>
