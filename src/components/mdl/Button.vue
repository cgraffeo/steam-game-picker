<template>
  <button class="mdl-button mdl-js-button" :class="classes" @click="click">
    <i class="material-icons" v-if="icon" v-text="icon"></i>
    {{msg}}
  </button>
</template>

<script>
export default {
  props: {
    fab: Boolean,
    miniFab: Boolean,
    ripple: Boolean,
    colored: Boolean,
    primary: Boolean,
    raised: Boolean,
    accent: Boolean,
    iconOnly: Boolean,
    shadow: String,
    icon: String,
    msg: String
  },
  computed: {
    classes () {
      return [
        this.fab ? 'mdl-button--fab' : null,

        this.miniFab ? 'mdl-button--mini-fab' : null,
        this.miniFab ? 'mdl-button--fab' : null,

        this.ripple ? 'mdl-js-ripple-effect' : null,
        this.colored ? 'mdl-button--colored' : null,
        this.primary ? 'mdl-button--primary' : null,
        this.raised ? 'mdl-button--raised' : null,
        this.accent ? 'mdl-button--accent' : null,
        this.iconOnly ? 'mdl-button--icon' : null,
        this.shadow ? `mdl-shadow--${this.shadow}dp` : null
      ]
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}

</script>