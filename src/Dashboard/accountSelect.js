import React from 'react'
import { AccountSelectorDiv, AccountSelectorButton, AccountSelectorLinks, AccountSelectorItems } from "./styles";
const accountSelector = () => {
  return (
    <AccountSelectorDiv>
        <div class="dropdown">
        <AccountSelectorButton>
            <button class="dropbtn">Dropdown</button>
        </AccountSelectorButton>
            <AccountSelectorItems>
                <div class="dropdown-content">
                <AccountSelectorLinks>
                    <a href="c">Link 1</a>
                    <a href="https://google.com">Link 2</a>
                    <a href="https://google.com">Link 3</a>               
                </AccountSelectorLinks>
                </div>
            </AccountSelectorItems>
        </div>
    </AccountSelectorDiv>

  )
}

export default accountSelector