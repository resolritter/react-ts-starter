const _ = require("lodash")
const crypto = require("crypto")

const chunkSalt = process.env['CHUNKS_HASH_SALT']

if (!chunkSalt) {
  console.error(`Salt ${chunkSalt} for production build chunks is not set`)
  exit(0)
}

module.exports = {
  mergeConfigurations(baseConfiguration, otherConfiguration) {
    return _.mergeWith(baseConfiguration, otherConfiguration, function(
      objValue,
      srcValue,
    ) {
      if (_.isArray(objValue)) {
        return objValue.concat(srcValue)
      }
    })
  },
  hashChunk(chunkName) {
    const hashBuffer = crypto.pbkdf2Sync(chunkName, chunkSalt, 4, 16, 'md5')
    return hashBuffer.toString('hex')
  }
}
