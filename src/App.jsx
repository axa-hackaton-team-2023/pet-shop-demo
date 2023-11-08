import Widget from "remoteApp/Widget";

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.page}>
        <div className={classes.header}>
            <div className={classes.navbar}>

            </div>

            <div className={classes.headerContent}>
                <div className={classes.logo}>
                    <img src={"https://www.qualipet.ch/static/version1699277464/frontend/Qualipet/default/de_CH/images/logo/qp-de.svg"}/>
                </div>
            </div>

            <div className={classes.headerMenu}>

            </div>
        </div>

        <div className={classes.pageContent}>
            <div className={classes.placeholderContainer} style={{
                width: 460
            }}>
                <div className={classes.pagePlaceholder} style={{
                    width: '60%',
                    backgroundColor: 'rgba(255,237,39,0.51)'
                }}/>

                <div className={classes.pagePlaceholder} style={{
                    height: 160,
                    backgroundColor: 'rgba(255,237,39,0.29)'
                }}/>
                <div className={classes.pagePlaceholder} style={{
                    width: '32%',
                    backgroundColor: 'rgba(255,237,39,0.51)'
                }}/>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 8
                }}>
                    <div className={classes.pagePlaceholder} style={{
                        backgroundColor: 'rgba(255,237,39,0.29)',
                        height: 160,
                    }}/>
                    <div className={classes.pagePlaceholder} style={{
                        backgroundColor: 'rgba(255,237,39,0.29)',
                        height: 160,
                    }}/>
                    <div className={classes.pagePlaceholder} style={{
                        backgroundColor: 'rgba(255,237,39,0.29)',
                        height: 160,
                    }}/>
                </div>

            </div>
            <div className={classes.widgetContainer}>
                <Widget propositionId={52}/>
            </div>


            <div className={classes.placeholderContainer} style={{
                width: 200
            }}>
                <div className={classes.pagePlaceholder} style={{
                    width: '80%',
                    backgroundColor: 'rgba(255,237,39,0.51)'
                }}/>

                <div className={classes.pagePlaceholder} style={{
                   height: 180,
                    backgroundColor: 'rgba(255,237,39,0.29)'
                }}/>

                <div className={classes.pagePlaceholder} style={{
                    height: 180,
                    backgroundColor: 'rgba(255,237,39,0.29)'
                }}/>

                <div className={classes.pagePlaceholder} style={{
                    height: 180,
                    backgroundColor: 'rgba(255,237,39,0.29)'
                }}/>

                <div className={classes.pagePlaceholder} style={{
                    height: 180,
                    backgroundColor: 'rgba(255,237,39,0.29)'
                }}/>
            </div>
        </div>

        <div className={classes.footer}>

        </div>

    </div>
  );
}

export default App;
