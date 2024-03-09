import React from 'react'
import { AccountSelectorWrapper, AccountSelectorButton, AccountSelectorLinks, AccountSelectorItems } from "./styles";
const accountSelector = () => {
  return (
    <AccountSelectorWrapper>
        <AccountSelectorButton>
            <AccountSelectorItems>
                <AccountSelectorLinks>
                <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="c">Link 1</a>
                        <a href="https://google.com">Link 2</a>
                        <a href="https://google.com">Link 3</a>
                    </div>
                </div>
                </AccountSelectorLinks>
            </AccountSelectorItems>
        </AccountSelectorButton>
    </AccountSelectorWrapper>

  )
}

export default accountSelector