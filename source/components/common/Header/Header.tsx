import * as React from 'react';
import Button from '../Button/Button';

import * as styles from './Header.less';

export default class Header extends React.PureComponent<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (<header className={styles.header}>
            <div>
                <h3>QuizCode</h3>
                <Button />
            </div>
        </header>);
    }
}
