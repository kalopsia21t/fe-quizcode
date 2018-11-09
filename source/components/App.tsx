import * as React from 'react';

import * as styles from './App.less';
import Header from './common/Header/Header';

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (<div className={styles.app}>
            <div className={styles.appContent}>
                <Header />
            </div>
        </div>);
    }
}

export default App;
