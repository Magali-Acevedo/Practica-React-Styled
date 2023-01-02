import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  width: 100%;
  gap: ${props => props.gap}px;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
`

Grid.defaultProps = {
  columns: 12,
  gap: 16,
}