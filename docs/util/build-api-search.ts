import { linker } from './linker';
import { remark } from 'remark';

import docs from '../components/api.json';

export function buildApiSearch() {
    return docs
        .reduce((arr: any[], item) => {
            const items = scan(item);
            arr = arr.concat(items);
            return arr;
        }, [])
        .sort((a, b) => a.path.localeCompare(b.path));
}

function toString(ast) {
    return ast ? remark().stringify(ast) : '';
}

// recursive function to create a record for each item member
function scan(items) {
    if (items.members) {
        return Object.keys(items.members).reduce((arr: any[], type) => {
            items.members[type].forEach(
                (member: { name: any; namespace: any; description: any }) => {
                    arr = arr.concat({
                        name: member.name,
                        namespace: member.namespace,
                        description: toString(member.description),
                        path: linker(member.namespace),
                    });

                    // run again
                    const matches = scan(member);
                    if (matches) arr = arr.concat(matches);
                }
            );
            return arr;
        }, []);
    }
}
