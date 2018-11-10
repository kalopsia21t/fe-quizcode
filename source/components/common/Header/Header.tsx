import * as React from 'react';
import Button from '../Button/Button';

import * as styles from './Header.less';

export default class Header extends React.PureComponent<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (<header className={styles.header}>
            <h3>QuizCode</h3>
            <div className={styles.authBlock}>
                <Button title='Log In' />
                <Button title='Sign Up' />
            </div>
        </header>);
    }
}
