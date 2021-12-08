import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import SingleNote from './screens/SingleNote/SingleNote';
import CreateNote from './screens/SingleNote/CreateNote';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
    const [search, setSearch] = useState('');
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <BrowserRouter>
            <Header setSearch={(s) => setSearch(s)} />
            <main>
                <Route
                    path="/"
                    component={
                        userInfo
                            ? ({ history }) => (
                                  <MyNotes search={search} history={history} />
                              )
                            : LandingPage
                    }
                    exact
                />
                <Route path="/login" component={LoginScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route
                    path="/mynotes"
                    component={({ history }) => (
                        <MyNotes search={search} history={history} />
                    )}
                />
                <Route path="/note/:id" component={SingleNote} />
                <Route path="/createnote" component={CreateNote} />;
                <Route path="/profile" component={ProfileScreen} />
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
