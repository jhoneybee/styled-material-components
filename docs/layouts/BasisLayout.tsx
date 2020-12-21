import React from 'react'
import styled from 'styled-components'

const headerHeight = '4em'
const siderWidth = '17em'

const Header = styled.header`
    height: ${headerHeight};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background: #212121;
`

const Sider = styled.div`
    height: calc(99.5% - ${headerHeight});
    width: ${siderWidth};
    display: inline-block;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`

const Content = styled.div`
    height: calc(99.5% - ${headerHeight});
    width: calc(100% - ${siderWidth});
    display: inline-block;
    background: #fafafa;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`

export default () => {
    return (
        <>
            <Header></Header>
            <Sider></Sider>
            <Content></Content>
        </>
    )
}
