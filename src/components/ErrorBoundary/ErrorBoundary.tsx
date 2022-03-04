import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";

export default class ErrorBoundary extends Component<{}, { hasError: boolean }> {

    state = {
        hasError: false
    }

    componentDidCatch(): void {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children        
    }
}