const tabOrder = {
    api: {
        title: 'API Reference'
    },
    examples: {
        title: 'Examples'
    },
    plugins: {
        title: 'Plugins'
    },
    'style-spec': {
        title: 'Style Specification'
    }
};

interface Tab {
    label: string;
    id: string;
    href: string;
}

interface Folder {
    frontMatter: { title: string };
    path: string;
}

export function listTabs(arrayOfFolders: Folder[]) {
    let alltheTabs: Tab[] = arrayOfFolders
        .filter(
            (folder) =>
                folder.path.indexOf('404') < 0 && folder.frontMatter.title
        ) // only evaluate pages that have frontMatter
        .map((tab) => {
            const tabId = tab.path.split('/')[2];
            return {
                label: tabOrder[tabId].title,
                id: tabId,
                href: tab.path
            };
        });
    const orderedTabs: Tab[] = [];
    Object.keys(tabOrder).forEach((key) => {
        let found = false;
        alltheTabs = alltheTabs.filter((item) => {
            if (!found && item.id === key) {
                orderedTabs.push(item);
                found = true;
                return false;
            } else return true;
        });
    });

    return orderedTabs;
}
