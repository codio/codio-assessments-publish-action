import * as core from '@actions/core'
import codio from 'codio-api-js'

const main = async () => {
  try {
    const token = core.getInput('token', { required: false })
    const clientId = core.getInput('client-id', { required: false })
    const secretId = core.getInput('secret-id', { required: false })
    const libraryId = core.getInput('library-id', { required: true })

    const dir = core.getInput('dir', { required: true })
    const domain = core.getInput('domain', { required: false })
    
    if (!token && !clientId && !secretId) {
      throw new Error('no Auth Data')
    }

    codio.v1.setDomain(domain)

    if (!token) {
      console.log('Authentication')
      await codio.v1.auth(clientId, secretId)
    } else {
      codio.v1.setAuthToken(token)
    }
    
    await codio.v1.assessment.fromCodioProject(libraryId, dir)
    console.log('Completed!')

  } catch (error) {
    if (error.json) {
      console.log(await error.json())
    }
    core.setFailed(error.message)
  }
}

main()