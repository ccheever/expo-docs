import redirect from '~/lib/redirect'
import { LATEST_VERSION } from '~/data/versions'
export default redirect('/docs/' + LATEST_VERSION)
