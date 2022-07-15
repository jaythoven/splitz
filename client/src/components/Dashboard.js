import { Layout, Menu} from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import CurrentTabs from './CurrentTabs';
import NewTab from './NewTab';
import CompletedTabs from './CompletedTabs';

const { Header, Content, Sider, Footer } = Layout;

function Dashboard({ setUser, user }) {
    function handleLogoutClick() {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        })}
    return (
        <Layout className="box">
            <Header className="header" >
                {/* <h1>$PLITZ</h1> */}
                <h1>Welcome to $plitz, {user.username}!</h1>
            </Header>
            {/* <Router>
            <div className="App">
                <NavBar className="App-header"/>
                
            </div>
            </Router>             */}
            
            <Layout>
                {/* <Sider width={300} id="sidebar"> */}
                    <Menu mode="inline">
                        {/* <h3><Menu.Item key={0} disabled icon="">Hey, {user.username}!</Menu.Item></h3> */}
                        <Menu.Item key={1}>
                            <Link to="/new">
                                New Bill/Check
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={2}>
                            <Link to="/">
                                Still Open
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={3}>
                            <Link to="/completed">
                                Complete
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={4} onClick={handleLogoutClick}>Logout</Menu.Item>
                    </Menu>
                {/* </Sider> */}
            <Layout>
                <Content id='content'>
                    <Routes>
                        <Route path="/new" element={<NewTab curr_user={user} />}></Route>
                        <Route path="/" element={<CurrentTabs user={user} />}></Route>
                        <Route path="/completed" element={<CompletedTabs user={user} />}></Route>
                    </Routes>
                </Content>
            </Layout>
            </Layout>
            <Footer className="footer">
            <h1>$PLITZ™</h1>
            </Footer>
        </Layout>
    )
}

export default Dashboard;