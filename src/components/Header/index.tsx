import CoffeDeliveryLogo from '../../assets/coffe-develiery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, LightPurpleAction, LightYellowAction } from './styles'
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={CoffeDeliveryLogo} alt="" />
      <div className="action-header-container">
        <LightPurpleAction>
          <MapPin size={20} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LightPurpleAction>
        <LightYellowAction className="cart">
          <ShoppingCart size={20} weight="fill" />
        </LightYellowAction>
      </div>
    </HeaderContainer>
  )
}
