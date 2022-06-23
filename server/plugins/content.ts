import { visit } from "unist-util-visit"

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:afterParse", (file) => {
      if (file._id.endsWith(".md")) {
      visit(
        file.body,
        (n: any) => n.tag === "img",
        (node) => {
          file.coverImage = node.props.src
        }
      )
    }
  })
})
