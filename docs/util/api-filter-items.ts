import docs from '../components/api.json';

export default (pageName: any) =>
    docs.filter((doc: { name: any }) => doc.name === pageName);
