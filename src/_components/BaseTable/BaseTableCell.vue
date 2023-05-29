<script lang="ts">
  import { defineComponent } from 'vue'
  /**
   * @displayName BaseTableCell
   *  should be used inside the BaseTable
   *  this component does not render anything instead the slots are rendered
   *  props are used as a v-slot that are passed from the BaseTable component
   *  this is a named component so that it can be filtered out inside the BaseTable
   *
   */
  export default defineComponent({
    name: 'BaseTableCell',
    props: {
      label: { type: String, default: '' },
      field: { type: String, required: true },
      class: { type: String, default: '' },
    },
    render() {
      return null
    },
  })
</script>
