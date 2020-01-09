const _ = require("lodash")

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
}
