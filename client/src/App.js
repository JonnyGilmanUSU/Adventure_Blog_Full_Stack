import './App.css';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AdventuresPage from './pages/AdventuresPage/AdventuresPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import BlogPostDetails from './pages/BlogPostDetails/BlogPostDetailsPage';
import CreateBlogPost from './pages/CreateBlogPost/CreateBlogPostPage';
import { AuthProvider } from './Context/AuthContext';
import { SearchResultsProvider } from './Context/SearchContext';
import AdventureTypePage from './pages/AdventureTypePage/AdventureTypePage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';





function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Layout />, errorElement: <Layout><ErrorPage/></Layout>, children: [
      {index: true, element: <HomePage/>},
      {path: 'adventures', element: <AdventuresPage/>},
      {path: 'adventures/:type', element: <AdventureTypePage />},
      {path: 'login', element: <LoginPage/>},
      {path: 'signup', element: <SignupPage/>},
      {path: 'about', element: <AboutPage/>},
      {path: 'createBlogPost', element: <CreateBlogPost/>},
      {path: 'blog/:id', element: <BlogPostDetails />}, 
      {path: 'searchResults', element: <SearchResultsPage />}, 
    ]}
  ]);

  return (
    <SearchResultsProvider>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </SearchResultsProvider>
  );
}

export default App;
