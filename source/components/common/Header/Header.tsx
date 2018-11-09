import * as React from 'react';

import * as styles from './Header.less';

export default class Header extends React.PureComponent<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (<header className={styles.header}>
            <div>
                <h3>QuizCode</h3>
            </div>
        </header>);
    }
}
