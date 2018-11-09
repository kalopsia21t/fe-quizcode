import * as React from 'react';
import * as styles from './Button.less';

interface IButtonProps {
    onClick?: () => void;
    title?: string;
}

export default class Button extends React.PureComponent<IButtonProps, {}> {
    private static defaultProps = {
        onClick: () => {}, // tslint:disable-line
        title: 'defaultTitle'
    };

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <button
                className={styles.btn}
                onClick={this.props.onClick}
            >
                {this.props.title}
            </button>
        );
    }
}
