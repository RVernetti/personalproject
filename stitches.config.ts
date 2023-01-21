import { createStitches } from '@stitches/react'
import Values from 'values.js'

export const PRIMARY = '#0000FF'
export const SECONDARY = '#012169'

export const { styled, getCssText, config, createTheme } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    fontSizes: {
      1: '40px',
      2: '36px',
      3: '32px',
      4: '28px',
      5: '24px',
      6: '20px',
      7: '18px',
      8: '16px',
      9: '14px',
      10: '12px',
      large: '52px',
      small: '44px',
    },
    lineHeights: {
      1: '48px',
      2: '44px',
      3: '40px',
      4: '36px',
      5: '32px',
      6: '28px',
      7: '24px',
      8: '20px',
      large: '56px',
      small: '48px',
    },
  },
  media: {
    xs: '(min-width: 360px)', // extra small
    xsm: '(max-width: 375px)', // extra-small
    sm: '(min-width: 470px)', // small
    smp: '(min-width: 500px)', // small-plus
    md: '(min-width: 632px)', // medium
    lg: '(min-width: 844px)', // large
    xsh: '(min-height: 600px)', // extra small
    xsmh: '(min-height: 700px)', // extra-small
    smh: '(min-height: 800px)', // small
    smph: '(min-height: 900px)', // small-plus
    mdh: '(min-height: 1000px)', // medium
    lgh: '(min-height: 1300px)', // large
  },
})

const primaryColor = new Values(PRIMARY)
const tintsPrimaryColor = primaryColor.all(20)

const secondaryColor = new Values(SECONDARY)
const tintsSecondaryColor = secondaryColor.all(20)

const defaultTheme = createTheme({
  colors: {
    primary50: tintsPrimaryColor[1].tint(50).hexString(),
    primary200: tintsPrimaryColor[2].hexString(),
    primary500: primaryColor.hexString(),
    primary600: tintsPrimaryColor[6].hexString(),
    primary700: tintsPrimaryColor[7].hexString(),
    primary800: tintsPrimaryColor[8].hexString(),

    secondary50: tintsSecondaryColor[1].tint(50).hexString(),
    secondary100: tintsSecondaryColor[2].hexString(),
    secondary200: tintsSecondaryColor[3].hexString(),
    secondary300: tintsSecondaryColor[4].hexString(),
    secondary500: secondaryColor.hexString(),
    secondary600: tintsSecondaryColor[6].hexString(),

    neutral50: '#EEF9F1',
    neutral100: '#DEE1E4',
    neutral200: '#BCC3C8',
    neutral300: '#9BA4AD',
    neutral400: '#798691',
    neutral500: '#586876',
    neutral700: '#353E47',
    neutral800: '#232A2F',
    neutral900: '#121518',

    valid: '#22C55E',
    warning: '#F59E0B',
    alert: '#EF4444',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'rgba(0, 0, 0, 0)',
  },
  shadows: {
    primary500: primaryColor.hexString(),
    secondary500: secondaryColor.hexString(),
    white: '#FFFFFF',
  },
})

const primaryColorDark = new Values('#000')
const tintsPrimaryColorDark = primaryColor.all(20)

const secondaryColorDark = new Values('#FFF')
const tintsSecondaryColorDark = secondaryColor.all(20)

const darkTheme = createTheme({
  colors: {
    primary50: tintsPrimaryColorDark[1].tint(50).hexString(),
    primary200: tintsPrimaryColorDark[2].hexString(),
    primary500: primaryColorDark.hexString(),
    primary600: tintsPrimaryColorDark[6].hexString(),
    primary700: tintsPrimaryColorDark[7].hexString(),
    primary800: tintsPrimaryColorDark[8].hexString(),

    secondary50: tintsSecondaryColorDark[1].tint(50).hexString(),
    secondary100: tintsSecondaryColorDark[2].hexString(),
    secondary200: tintsSecondaryColorDark[3].hexString(),
    secondary300: tintsSecondaryColorDark[4].hexString(),
    secondary500: secondaryColorDark.hexString(),
    secondary600: tintsSecondaryColorDark[6].hexString(),

    neutral50: '#EEF9F1',
    neutral100: '#DEE1E4',
    neutral200: '#BCC3C8',
    neutral300: '#9BA4AD',
    neutral400: '#798691',
    neutral500: '#586876',
    neutral700: '#353E47',
    neutral800: '#232A2F',
    neutral900: '#121518',

    valid: '#22C55E',
    warning: '#F59E0B',
    alert: '#EF4444',
    black: '#000000',
    white: '#FFFFFF',
  },
  shadows: {
    primary500: primaryColor.hexString(),
    white: '#FFFFFF',
  },
})

const primaryColorRandom = new Values('#f0aa1f')
const tintsPrimaryColorRandom = primaryColor.all(20)

const secondaryColorRandom = new Values('#27899d')
const tintsSecondaryColorRandom = secondaryColor.all(20)

const randomTheme = createTheme({
  colors: {
    primary50: tintsPrimaryColorRandom[1].tint(50).hexString(),
    primary200: tintsPrimaryColorRandom[2].hexString(),
    primary500: primaryColorRandom.hexString(),
    primary600: tintsPrimaryColorRandom[6].hexString(),
    primary700: tintsPrimaryColorRandom[7].hexString(),
    primary800: tintsPrimaryColorRandom[8].hexString(),

    secondary50: tintsSecondaryColorRandom[1].tint(50).hexString(),
    secondary100: tintsSecondaryColorRandom[2].hexString(),
    secondary200: tintsSecondaryColorRandom[3].hexString(),
    secondary300: tintsSecondaryColorRandom[4].hexString(),
    secondary500: secondaryColorRandom.hexString(),
    secondary600: tintsSecondaryColorRandom[6].hexString(),

    neutral50: '#EEF9F1',
    neutral100: '#DEE1E4',
    neutral200: '#BCC3C8',
    neutral300: '#9BA4AD',
    neutral400: '#798691',
    neutral500: '#586876',
    neutral700: '#353E47',
    neutral800: '#232A2F',
    neutral900: '#121518',

    valid: '#22C55E',
    warning: '#F59E0B',
    alert: '#EF4444',
    black: '#000000',
    white: '#FFFFFF',
  },
  shadows: {
    primary500: primaryColor.hexString(),
    white: '#FFFFFF',
  },
})

// TODO Theme interface
/**
 * Permet de générer un thème Stiches à partir du thème de campagne MagicLink
 * @param theme - le thème de la campagne MagicLink
 * @returns - le thème Stiches décliné selon le thème de campagne
 */
const getTheme = (theme: any) => {
  const { primaryColor: primary = PRIMARY, secondaryColor: secondary = SECONDARY } = theme || {}
  // Dégradé de couleurs à partir de la couleur principale
  const primaryColor = new Values(primary)
  const tintsPrimaryColor = primaryColor.all(20)
  // Dégradé de couleurs à partir de la couleur secondaire
  const secondaryColor = new Values(secondary)
  const tintsSecondaryColor = secondaryColor.all(20)
  return createTheme({
    colors: {
      primary50: tintsPrimaryColor[1].tint(50).hexString(),
      primary200: tintsPrimaryColor[2].hexString(),
      primary500: primaryColor.hexString(),
      primary600: tintsPrimaryColor[6].hexString(),
      primary700: tintsPrimaryColor[7].hexString(),
      primary800: tintsPrimaryColor[8].hexString(),

      secondary50: tintsSecondaryColor[1].tint(50).hexString(),
      secondary100: tintsSecondaryColor[2].hexString(),
      secondary200: tintsSecondaryColor[3].hexString(),
      secondary300: tintsSecondaryColor[4].hexString(),
      secondary500: secondaryColor.hexString(),
      secondary600: tintsSecondaryColor[6].hexString(),

      neutral50: '#EEF9F1',
      neutral100: '#DEE1E4',
      neutral200: '#BCC3C8',
      neutral300: '#9BA4AD',
      neutral400: '#798691',
      neutral500: '#586876',
      neutral700: '#353E47',
      neutral800: '#232A2F',
      neutral900: '#121518',

      valid: '#22C55E',
      warning: '#F59E0B',
      alert: '#EF4444',
      black: '#000000',
      white: '#FFFFFF',
    },
    shadows: {
      primary500: primaryColor.hexString(),
      secondary500: secondaryColor.hexString(),
      white: '#FFFFFF',
    },
  })
}

export { defaultTheme, darkTheme, randomTheme, getTheme }
