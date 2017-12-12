import backend from './backend'

describe('getAllTags', () => {
  it('returns a list of tags', async () => {
    let tags = await backend.getAllTags()
    expect(tags.length).toBeGreaterThanOrEqual(0)
    expect(tags[0]).toHaveProperty('guid')
    expect(tags[0]).toHaveProperty('name')
    expect(tags[0]).toHaveProperty('parentGuid')
    expect(tags[0]).toHaveProperty('updateSequenceNum')
  })
})

describe('generateTagTree', () => {
  it('produces a tree object from a base tag', async () => {
    let tags = await backend.getAllTags()
    let guid = "d397e224-7824-4539-8d06-cac29d2de7db"
    let tree = backend.generateTagTree(tags, guid)
    expect(tree).toHaveProperty('children')
    expect(tree.children.length).toEqual(2)
    let agile = tree.children.find(node => node.name == 'agile')
    expect(agile.children[0].name).toBe('BDD')
  })
})

describe('allTagTrees', async () => {
  it('produces a list of tree roots', async () => {
    const tags = await backend.getAllTags()
    const trees = backend.allTagTrees(tags)
    let expectedRoots = ['home', 'projects', 'work'].sort()
    let actualRoots = trees.map(tag => tag.name).sort()
    expect(actualRoots).toEqual(expectedRoots)
    expect(trees.every(root => root.parentGuid === null)).toBe(true)
  })
  it('adds the branches of each tree as children', async () => {
    const tags = await backend.getAllTags()
    const trees = backend.allTagTrees(tags)
    let homeTree = trees.find(root => root.name == 'home')
    expect(homeTree.children[0].name).toEqual('chores')
    let workTree = trees.find(root => root.name == 'work')
    let agileTree = workTree.children.find(child => child.name == 'agile')
    expect(agileTree.children[0].name).toEqual('BDD')
  })
})
