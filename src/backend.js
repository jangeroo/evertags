import axios from 'axios'

class EvertagsAPI {
  getAllTags = () => {
    return axios.get('http://localhost:4000/tags')
      .then(response => response.data)
  }

  generateTagTree = (tags, guid) => {
    // set parent as root
    let tree = tags.find(tag => tag.guid == guid)
    // console.log(tree)
    // find all child tags of parent
    let children = tags.filter(tag => {
      return tag.parentGuid == guid
    })
    // console.log(children)
    // for each child tag,
    tree['children'] = children.map(child => this.generateTagTree(tags, child.guid))
    //   append to parent's children a tree with child as parent
    return tree
  }
}

export default new EvertagsAPI();
