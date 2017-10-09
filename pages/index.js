import redirect from '~/lib/redirect'
import { LATEST_VERSION } from '~/data/versions'
export default redirect('/versions/' + LATEST_VERSION)
