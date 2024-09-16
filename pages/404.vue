<script>
import Error from '../layouts/error.vue';

/**
 * This component is a special 404 page just for nginx
 * or gitlab-pages
 *
 * In development we fall back to the good old
 * layouts/error.vue
 */
// eslint-disable-next-line @gitlab/no-runtime-template-compiler
export default {
  extends: Error,
  layout: 'no_footer',
};
</script>
