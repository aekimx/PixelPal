import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useModal } from "../../context/Modal";
import OpenModalMenuItem from './OpenModalMenuItem';
import { getAllEmojisThunk, createReactionThunk, loadOneEmojiThunk, allEmojis } from "../../store/emojis";

import "./GetAllEmojis.css"

// to be put into message component
// const [showMenu, setShowMenu] = useState(false);
// const closeMenu = () => setShowMenu(false);

{/* <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                className="signUpText"
                modalComponent={<GetAllEmojis />}
              /> */}


export default function GetAllEmojis() {

  const dispatch = useDispatch()
  const {closeModal} = useModal()


  useEffect(() => {
    dispatch(getAllEmojisThunk())
  }, [dispatch])

  const emojis = useSelector(state => state.emoji.allEmojis)
  const emojisArr = Object.values(emojis)

  // console.log('emojis arr', emojisArr)

  const userId = useSelector(state => state.session.user?.id)

  // const handleClick = (e, emojiId, messageId) => {
  //   // get create a reaction from the click
  //   // need to input messageId from message component
  //   let new_reaction = dispatch(createReactionThunk(emojiId, messageId, userId))

  //   // query for the emoji if the reaction successfully worked
  //   if (new_reaction) {
  //     let emoji = dispatch(loadOneEmojiThunk(new_reaction['emojiId']))
  //     new_reaction[emoji.id] = emoji.url // replacing emoji Id with emojiURL?
  //     .then(closeModal)
  //   }
  // }


  return (
    <div className='emoji-modal-container'>
      <p>{String.fromCodePoint(0x1F354)}</p>
      {emojisArr.map(emoji => {
        return (<p className='emoji-modal-emoji'
        value={emoji.id}
        // onClick={handleClick}
        >
          {String.fromCodePoint(emoji.url)}
          </p>)
      })}
    </div>
  )
}
