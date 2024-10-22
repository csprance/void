# Frontend

> Void Frontend and main client app

# Completed

- Shift/Ctrl clicking in Browser

# TODO

- Sort Treeview alphabetically

- Fix use of AppStore vs AssetsStore props

- Reuseable Table Component?

  - Selected
  - Sorting

- AssetCollectionManager

  - OnMount should populate the collection options and their state
  - On Accept it should mutate the database

- User Management

  - Editing users popup (credits, role)

- New Asset

  - when removing a file there is an axios error
  - implement size limit restrictions on the file uploaders

- Support for thumbnail videos in root folder (mp4)
- Batch Gallery Images/Videos Scripting
- json file 'gallery' relative paths to image/video
- Edit Asset to add gallery images/videos
- Edit Collection mutation for bulk
- Categories treeview, when selected Element it would not
- Delete on asset single Gallery images was error ingest bug
- Collection defining within the JSON files for Batch Uploading

# Styling Guide

- Primrary Text (titles)

  ```css
  text-gray-900
  dark:text-gray-100
  ```

- Base Text (paragraphs)

  ```css
  text-gray-500
  dark:text-gray-400
  ```

- Linebreaks / Borders

  ```css
  border-gray-200
  dark:border-gray-700
  ```

- Flat Buttons (icon buttons)

  ```css
  enabled:text-gray-600
  enabled:hover:bg-black/5
  enabled:hover:text-gray-800
  enabled:active:bg-gray-900/20

  dark:enabled:text-gray-300
  dark:enabled:hover:bg-white/5
  dark:enabled:hover:text-gray-50
  dark:enabled:active:bg-white/10
  dark:hover:bg-white/5
  ```

- Bordered Buttons (social)

  ```css
  border

  enabled:text-gray-600
  enabled:hover:bg-black/5
  enabled:hover:text-gray-800
  enabled:active:bg-gray-900/20
  border-gray-300

  dark:enabled:text-gray-300
  dark:enabled:hover:bg-white/5
  dark:enabled:hover:text-gray-50
  dark:enabled:active:bg-white/10
  dark:hover:bg-white/5
  dark:border-gray-700
  ```

- Inputs

```css
block w-full px-3 py-2 border-2 rounded-lg

bg-white
text-gray-800
placeholder-gray-300
border-gray-200

dark:text-gray-200
dark:bg-white/[2.5%]
dark:focus:border-sky-500
dark:border-gray-700
dark:placeholder-gray-600

focus:border-sky-500
focus:outline-none
```

- Accent Button (blue)

```css
flex
items-center
justify-center
gap-2
px-6
py-3
text-base
font-semibold
text-white
rounded-full
shadow-sm
shrink-0
bg-sky-500
hover:bg-sky-400
active:bg-sky-500
```

- Accent Button Bordered (blue)

```css
flex
items-center
justify-center
gap-2
px-4
py-2
text-sm
font-semibold
transition-colors
border
rounded-full
shadow-sm
text-sky-500
shrink-0
border-sky-500
hover:text-white
hover:bg-sky-400
active:bg-sky-500
```
