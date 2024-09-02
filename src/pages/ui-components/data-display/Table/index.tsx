import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Simple from './Simple'
import Compact from './Compact'
import Sorting from './Sorting'
import Filtering from './Filtering'
import PaginationTable from './PaginationTable'
import Group from './Group'
import RowSelection from './RowSelection'
import Expanding from './Expanding'
import SubComponent from './SubComponent'
import Editable from './Editable'
import DragAndDrop from './DragAndDrop'
import Resizable from './Resizable'
// import VirtualizedRows from './VirtualizedRows'

const mdPath = 'Table'

const demoHeader = {
    title: 'جدول (Table)',
    desc: 'جداول اطلاعات را در ردیف‌ها و ستون‌ها نمایش می‌دهند که به کاربران این امکان را می‌دهد تا اطلاعات را با یکدیگر مقایسه و تحلیل کنند.',
}

const demos = [
    {
        mdName: 'Simple',
        mdPath: mdPath,
        title: 'ساده (Simple)',
        desc: 'مثال ساده جدول.',
        component: <Simple />,
    },
    {
        mdName: 'Compact',
        mdPath: mdPath,
        title: 'فشرده (Compact)',
        desc: 'جدول با نمای فشرده که به ما این امکان را می‌دهد که اطلاعات بیشتری را نمایش دهیم.',
        component: <Compact />,
    },
    {
        mdName: 'Sorting',
        mdPath: mdPath,
        title: 'مرتب‌سازی (Sorting)',
        desc: 'ستون‌ها می‌توانند با انتخاب هدرهای جدول مرتب شوند.',
        component: <Sorting />,
    },
    {
        mdName: 'Filtering',
        mdPath: mdPath,
        title: 'فیلتر کردن (Filtering)',
        desc: 'مثال فیلتر کردن.',
        component: <Filtering />,
    },
    {
        mdName: 'PaginationTable',
        mdPath: mdPath,
        title: 'صفحه‌بندی (PaginationTable)',
        desc: 'جدول می‌تواند با استفاده از <a href="/ui-components/pagination" class="text-blue-500">مؤلفه Pagination</a> کار کند.',
        component: <PaginationTable />,
    },
    {
        mdName: 'Group',
        mdPath: mdPath,
        title: 'گروه‌بندی (Group)',
        desc: 'مثال گروه‌بندی.',
        component: <Group />,
    },
    {
        mdName: 'RowSelection',
        mdPath: mdPath,
        title: 'انتخاب ردیف (RowSelection)',
        desc: 'مثال انتخاب ردیف.',
        component: <RowSelection />,
    },
    {
        mdName: 'Expanding',
        mdPath: mdPath,
        title: 'گسترش (Expanding)',
        desc: 'مثال گسترش ردیف.',
        component: <Expanding />,
    },
    {
        mdName: 'SubComponent',
        mdPath: mdPath,
        title: 'زیرمؤلفه (SubComponent)',
        desc: 'گسترش ردیف با زیرمؤلفه.',
        component: <SubComponent />,
    },
    {
        mdName: 'Editable',
        mdPath: mdPath,
        title: 'قابل ویرایش (Editable)',
        desc: 'مثال سلول قابل ویرایش.',
        component: <Editable />,
    },
    {
        mdName: 'DragAndDrop',
        mdPath: mdPath,
        title: 'کشیدن و رها کردن (DragAndDrop)',
        desc: 'مثال پیاده‌سازی <code>react-dnd</code> بر روی جدول.',
        component: <DragAndDrop />,
    },
    {
        mdName: 'Resizable',
        mdPath: mdPath,
        title: 'قابل تغییر اندازه (Resizable)',
        desc: 'مثال تغییر اندازه ستون.',
        component: <Resizable />,
    },
];

const demoApi = [
    {
        component: 'جدول (Table)',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'table'</code>`,
                desc: 'رندر المان',
            },
            {
                propName: 'borderlessRow',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'آیا باید حاشیه ردیف در جدول غیرفعال شود؟',
            },
            {
                propName: 'compact',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'آیا جدول را در نمای فشرده نمایش دهد؟',
            },
            {
                propName: 'hoverable',
                type: `<code>boolean</code>`,
                default: `<code>true</code>`,
                desc: 'آیا ردیف‌های جدول قابلیت هاور داشته باشند؟',
            },
            {
                propName: 'overflow',
                type: `<code>boolean</code>`,
                default: `<code>true</code>`,
                desc: 'آیا محتوای جدول اجازه سرریز داشته باشد؟',
            },
        ],
    },
    {
        component: 'سرصفحه جدول (Table.THead)',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'thead'</code>`,
                desc: 'رندر المان',
            },
        ],
    },
    {
        component: 'بدنه جدول (Table.TBody)',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'tbody'</code>`,
                desc: 'رندر المان',
            },
        ],
    },
    {
        component: 'پاصفحه جدول (Table.TFoot)',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'tfoot'</code>`,
                desc: 'رندر المان',
            },
        ],
    },
    {
        component: 'سطر جدول (Table.Tr)',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'tr'</code>`,
                desc: 'رندر المان',
            },
        ],
    },
    {
        component: 'سرستون جدول (Table.Th)',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'th'</code>`,
                desc: 'رندر المان',
            },
        ],
    },
    {
        component: 'سلول جدول (Table.Td)',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'td'</code>`,
                desc: 'رندر المان',
            },
        ],
    },
    {
        component: 'مرتب‌کننده جدول (Table.Sorter)',
        api: [
            {
                propName: 'sort',
                type: `<code>false | 'asc' | 'desc'</code>`,
                default: `<code>-</code>`,
                desc: 'وضعیت مرتب‌سازی',
            },
        ],
    },
]

const reactTableApi = (
    <div className="demo-api-table mb-12">
        <h4 className="mb-5">وابستگی‌ها</h4>
        <h6 id="react-table-api" className="mb-3">
            جدول ری‌اکت
        </h6>
        <p className="mb-1">
            بیشتر مثال‌ها بالا با{' '}
            <code>react-table</code> یک کتابخانه جدول داده سبک و گسترده برای سازماندهی، فیلتر، مرتب‌سازی، گروه‌بندی، جمع‌آوری، صفحه‌بندی و نمایش داده‌های حجیم ادغام شده‌اند. برای مثال‌های بیشتر و استفاده از هوک‌ها، به{' '}
            <a
                className="underline text-blue-500"
                href="https://react-table.tanstack.com/docs/overview"
                target="_blank"
                rel="noopener noreferrer"
            >
                مستندات رسمی
            </a>{' '}
            مراجعه کنید.
        </p>
    </div>
);

const Table = () => {
    return (
        <DemoLayout
            header={demoHeader}
            demos={demos}
            api={demoApi}
            extra={reactTableApi}
        />
    )
}

export default Table
