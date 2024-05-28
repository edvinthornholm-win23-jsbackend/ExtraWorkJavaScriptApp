'use client'

interface AddBookmarkBtnProps {
    itemId: number
  }

export default function AddBookmarkBtn(itemId: AddBookmarkBtnProps) {
    return (
      <button onClick={() => console.log(itemId)} type="submit" className="bookmark">
      <img className="bookmark" src="~/images/courses/bookmark.svg" alt="bookmark" />
      </button>
    );
  }
  