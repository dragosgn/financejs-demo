import styled, {css}  from 'styled-components'

//  Grid
const mobileGutter = "0.25rem"
const tabletGutter = "0.5rem"
const desktopGutter = "0.5rem"

export const baseContainer = css`
  width:100%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  * {
    box-sizing: border-box;
  }
`
export const Grid = styled.div`
  ${baseContainer};
`

export const baseColumn = css`
  float: left;
  min-height: 0.1rem;
  width: calc(100% * (${props => props.desktop ? props.desktop - 0.001 : 12} / 12) );
  /*  ADDED THE 0,0001 FOR IE COMPATIBILITY */
  display: inline;
  padding-right: ${props => props.nogutter ? 0 : desktopGutter};
  padding-left: ${props => props.nogutter ? 0 : desktopGutter};
  @media (max-device-width: 1200px) {
    width: calc(100% * (${props => props.desktop ? props.desktop - 0.001 : 12} / 12));
    padding-left: : ${props => props.nogutter ? 0 : desktopGutter};
    padding-right: : ${props => props.nogutter ? 0 : desktopGutter};
  };
  @media (max-device-width: 1024px) {
    width: calc(100% * (${props => props.tablet ? props.tablet - 0.001 : 8} / 8));
    padding-left: ${props => props.nogutter ? 0 : tabletGutter};
    padding-right: ${props => props.nogutter ? 0 : tabletGutter};
  }
  @media (max-device-width: 670px) {
    width: calc(100% * (${props => props.mobile ? props.mobile - 0.001 : 4} / 4));
    padding-left: ${props => props.nogutter ? 0 : mobileGutter};
    padding-right: ${props => props.nogutter ? 0 : mobileGutter};
  };
  @media print{
    max-width: calc(100% * (${props => props.desktop ? props.desktop : 12} / 12));
  }
`

export const Col = styled.div`
  ${baseColumn};
  `

export const baseRow = css`
  min-height: 0.1rem;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -${desktopGutter};
  margin-right: -${desktopGutter};
  @media (max-device-width: 1200px) {
    margin-left: -${desktopGutter};
    margin-right: -${desktopGutter};
  }
  @media (max-device-width: 1024px) {
    margin-left: -${tabletGutter};
    margin-right: -${tabletGutter};
  }
  @media (max-device-width: 670px) {
    margin-left: -${mobileGutter};
    margin-right: -${mobileGutter};
  }
`

export const Row = styled.div`
  ${baseRow};
`


export const Container = styled.div`
  width: 100%;
`

export const ContainerFluid = styled.div`
  width: 100%;
  max-width: 1200px;
`

// ------- End of the Grid -------

// ------- Template media queries -------

const sizes = {
	desktop: 1140,
	tablet: 1024,
	mobile: 376
}

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
	return acc
}, {})

// ------- End of template media queries -------
