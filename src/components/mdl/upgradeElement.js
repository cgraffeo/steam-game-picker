/**
 * upgradeElement mixin to init
 * a material design element on a dynamically generated site
 */

export default {
  mounted () {
    window.componentHandler.upgradeElement(this.$el)
  }
}
