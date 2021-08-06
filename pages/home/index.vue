<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li
                class="nav-item"
                v-for="item in tabMap"
                :key="item ? item : 'hello'"
                @click="changeTab(item)"
              >
                <span class="nav-link" :class="curSelectTab === item && 'active'" v-if="item">{{
                  item
                }}</span>
              </li>
            </ul>
          </div>
          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <ArticleItem :article="article" />
          </div>
          <div>
            <Pagination
              @setPage="setPage"
              @setOffset="setOffset"
              :pageSize="pageSize"
              :total="totalPages"
              :curPage="curPage"
            />
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <span
                v-for="(tag, index) in tags"
                :key="index"
                class="tag-pill tag-default"
                @click="handleSelectTag(tag)"
                >{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getTags,
  getGlobalFeedArticle,
  getYourFeedArticle,
  getTagArticle
} from '../../apis/article'
import Pagination from '../../components/Pagination'
import ArticleItem from '../../components/ArticleItem'

export default {
  name: 'HomeIndex',
  components: {
    Pagination,
    ArticleItem
  },

  data() {
    return {
      tags: [],
      tabMap: {
        your: 'Your Feed',
        global: 'Global Feed',
        dynamic: ''
      },
      curSelectTab: 'Global Feed',
      curPage: 1,
      pageSize: 10,
      totalPages: 0,

      articlesCount: 0,
      articles: []
    }
  },

  created() {
    this.getTagList()
    this.getGlobalFeedArticleList()
  },

  computed: {
    isLogin() {
      return this.$store.state.user.token
    }
  },

  methods: {
    async getTagList() {
      try {
        const { tags } = await getTags()
        this.tags = [...tags]
      } catch (error) {
        console.error(error)
      }
    },

    async changeTab(tab) {
      if (!this.isLogin) {
        return this.$router.push('/login')
      }
      this.curSelectTab = tab
      if (tab === 'Your Feed' || tab === 'Global Feed') this.tabMap.dynamic = ''
      await this.initArticlesOfTab(tab)
    },

    async handleSelectTag(tag) {
      if (!this.isLogin) {
        return this.$router.push('/login')
      }
      this.tabMap.dynamic = tag
      this.curSelectTab = tag
      await this.getTagArticle(1, this.pageSize, tag)
    },

    async setPage(page) {
      this.curPage = page
      await this.initArticlesOfTab(this.curSelectTab, this.curPage - 1)
    },

    async setOffset(offset) {
      this.pageSize = offset
      this.curPage = 1
      await this.initArticlesOfTab(this.curSelectTab, this.curPage - 1, this.pageSize)
    },

    async getYourFeedArticle(curPage, pageSize) {
      try {
        const { articles, articlesCount } = await getYourFeedArticle({
          limit: pageSize,
          offset: curPage
        })
        this.articles = articles
        this.totalPages = Math.ceil(articlesCount / this.pageSize)
      } catch (error) {
        console.error(error)
      }
    },

    async getTagArticle(curPage, pageSize, tag) {
      try {
        const { articles, articlesCount } = await getTagArticle({
          limit: pageSize,
          offset: curPage,
          tag: tag
        })
        this.articles = articles
        this.totalPages = Math.ceil(articlesCount / this.pageSize)
      } catch (error) {
        console.error(error)
      }
    },

    async getGlobalFeedArticleList(offset = 0, limit = 10) {
      try {
        const { articles, articlesCount } = await getGlobalFeedArticle({
          limit,
          offset
        })
        this.articles = articles
        this.articlesCount = articlesCount
        this.totalPages = Math.ceil(articlesCount / this.pageSize)
      } catch (error) {
        console.error(error)
      }
    },

    async initArticlesOfTab(tab, curPage = 0, pageSize = 10) {
      switch (tab) {
        case 'Global Feed':
          await this.getGlobalFeedArticleList(curPage, pageSize)
          break
        case 'Your Feed':
          await this.getYourFeedArticle(curPage, pageSize)
          break
        default:
          await this.getTagArticle(curPage, pageSize, tab)
          break
      }
    }
  }
}
</script>
