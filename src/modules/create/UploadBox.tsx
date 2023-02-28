import Uppy from '@uppy/core'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import Dashboard from '@uppy/dashboard'
import ImageKitUppyPlugin from "imagekit-uppy-plugin"


// this doesnt work :/
const UploadBox = new Uppy({debug: true, autoProceed: false})
.use(Dashboard, {
  inline: true,
  trigger: '#uppyDashboard', // your element
})
.use(ImageKitUppyPlugin, {
  id: 'ImageKit',
  authenticationEndpoint: `http://www.yourserver.com/auth`,
  publicKey: "your_public_key"
})

export default UploadBox