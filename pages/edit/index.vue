<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="article.tag"
                  @change="AddTagToTagList"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) in article.tagList"
                    :key="index"
                  >
                    <i class="ion-close-round" @click="removeTag(index)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="createOrUpdateArticle"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newArticle, getArticleDetail, updateArticle } from '../../apis/article'
export default {
  name: 'edit',
  data() {
    return {
      article: {
        body: '',
        description: '',
        tagList: [],
        title: '',
        tag: ''
      },
      slug: ''
    }
  },

  async created() {
    this.slug = this.$route.query.slug
    if (this.slug) {
      await this.getArticleDetail()
    }
  },
  methods: {
    async createOrUpdateArticle() {
      const params = Object.assign(this.article)
      delete params.tag
      try {
        if (this.slug) {
          await updateArticle(this.slug, params)
        } else {
          await newArticle(params)
        }
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    },

    AddTagToTagList() {
      this.article.tagList.push(this.article.tag)
      this.article.tag = ''
    },

    async getArticleDetail() {
      try {
        const { article } = await getArticleDetail(this.slug)
        this.article = Object.assign(this.article, article)
      } catch (error) {}
    }
  }
}
</script>

<style></style>
