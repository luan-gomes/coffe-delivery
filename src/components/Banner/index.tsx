import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BannerImage from '../../assets/banner-image.svg'
import { BannerContainer, IntroContainer, Item, ItemsContainer } from './styles'

export const Banner = () => {
  return (
    <BannerContainer>
      <IntroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ItemsContainer>
          <div className="item-group">
            <Item>
              <div className="icon-container yellow-dark">
                <ShoppingCart size={17} weight="fill" />
              </div>
              Compra simples e segura
            </Item>
            <Item>
              <div className="icon-container yellow">
                <Timer size={17} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </Item>
          </div>
          <div className="item-group">
            <Item>
              <div className="icon-container black">
                <Package size={17} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </Item>
            <Item>
              <div className="icon-container purple">
                <Coffee size={17} weight="fill" />
              </div>
              O café chega fresquinho até você
            </Item>
          </div>
        </ItemsContainer>
      </IntroContainer>
      <img src={BannerImage} alt="" />
    </BannerContainer>
  )
}
