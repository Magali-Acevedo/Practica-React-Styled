import styled from "styled-components";

export const Flex = styled.div(({
    justifyContent = 'center',
    alignItems = 'center',
    direction = 'row',
    gap = 0,
    wrap = 'none',
    color,
    height='100%',
    width
  }) => ({
    width: width,
    display: 'flex',
    gap,
    flexWrap: wrap,
    flexDirection: direction,
    justifyContent,
    alignItems,
    background: color,
    height: height,
  }))