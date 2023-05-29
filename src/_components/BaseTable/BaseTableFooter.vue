<script lang="ts">
  import { defineComponent } from 'vue'
  /**
   * @displayName BaseTableFooter
   *  should be used inside the BaseTable
   *  this component does not render anything instead the slots are rendered
   *  props are used as a v-slot that are passed from the BaseTable component
   *  this is a named component so that it can be filtered out inside the BaseTable
   *
   */
  export default defineComponent({
    name: 'BaseTableFooter',
    props: {
      class: { type: String, default: '' },
    },
    render() {
      return null
    },
  })
</script>
