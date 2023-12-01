import './style.css'

import "@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css"
import "@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/fonts/src/fonts.css"
import "@digi/arbetsformedlingen/components"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <digi-typography>
    <digi-header
      af-system-name="Digi/Vite - Lab"
      af-hide-system-name="false"
      af-menu-button-text="Meny"
    >
      <a slot="header-logo" aria-label="Designsystemets startsida" href="/"></a>
        <div slot="header-content">
          <digi-header-notification af-notification-amount="8">
            <a href="/">
              <digi-icon-bell-filled></digi-icon-bell-filled>
              Notiser
            </a>
          </digi-header-notification>
          <digi-header-avatar
            af-src="/avatar.svg"
            af-alt="Profilbild på Linda Karlsson"
            af-name="Linda Karlsson"
            af-signature="KALIA"
            af-is-logged-in="true"
            af-hide-signature="true"
          ></digi-header-avatar>
        </div>
      </div>
    </digi-header>
    <digi-layout-block af-vertical-padding="true">
      <digi-typography-heading-jumbo af-text="Digi / Vite"></digi-typography-heading-jumbo>
      <digi-typography-preamble>Labbmiljö med Digi-komponenterna med Vite och Typescript</digi-typography-preamble>
    </digi-layout-block>
  </digi-typography>
`
