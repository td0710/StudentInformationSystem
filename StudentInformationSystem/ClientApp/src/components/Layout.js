import { Stack } from "@fluentui/react";
import React, { Component } from "react";
import { HeaderLayout } from "./Layout/Header";
import { FooterLayout } from "./Layout/FooterLayout";
import {NavMenu} from "./NavMenu";

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <Stack verticalFill vertical tokens={{ childrenGap: 15 }} styles={{ root: { height: '100vh', minWidth: '650px' } }}>
                {/* Phần Header (Chiều cao cố định) */}
                <Stack.Item styles={{ root: { flexShrink: 0, height: '80px',width:"100vh" } }}>
                    <HeaderLayout />
                </Stack.Item>

                {/* Phần giữa: NavMenu và nội dung chính */}
                <Stack.Item grow styles={{ root: { overflow: 'hidden' } }}>
                    <Stack horizontal tokens={{ childrenGap: 15 }} styles={{ root: { height: '100%' } }}>
                        
                        {/* Phần nội dung chính bên phải */}
                        <Stack.Item grow styles={{ root: { overflowY: 'auto', padding: '10px', marginTop: '8px' } }}>
                            {this.props.children}
                        </Stack.Item>
                    </Stack>
                </Stack.Item>

                {/* Phần Footer (Chiều cao cố định) */}
                <Stack.Item styles={{ root: { flexShrink: 0, height: '60px' } }}>
                    <FooterLayout />
                </Stack.Item>
            </Stack>
        );
    }
}