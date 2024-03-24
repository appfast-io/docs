---
title: Article List
---

Article List is a block that allows you to display a list of articles on the screen. It uses the managed articles in the [Posts plugin](../PLUGINS/posts).

## Common Properties

You can configure the [Block Common Properties](overview#block-common-properties) on the right panel.

## Article List Properties

| Property | Description |
| -------- | ----------- |
| Data Filter | Allow you to filter the data for the list. You can [filter by article category or tag](#filter-by-article-category-or-tag). |
| Block Skin | Allow you to select the skin of the block. |
| Design | Besides setting the Design in Common Properties, you can also set the color of each item in the block. |
| Margin & Radius | Allow you to set the block's margins, padding, and radiuses. |
| Elements | Allow you to show/hide the elements of each item. |

### Filter by article category or tag

![Data Filter](../../static/img/block_list_datafilter.jpg)

Here you can select some specific categories or tags to filter the data, such as "Hot articles", "Popular articles", "Latest articles", "Most views articles", etc.

You can also input the name of the category property or tag property.

For example, if you want to show "Most views articles" and filter the data by category ID, you can select "Most views articles" and input `id` as the name of the category property. If you want to filter the data by tag name, you can input `name` as the name of the tag property. Then, you can link the category ID or tag name value to a menu item to display that category or tag on the screen along with the "Most views articles" list.
