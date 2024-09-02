import Table from '@/components/ui/Table'

const { Tr, Th, Td, THead, TBody } = Table

const Simple = () => {
    return (
        <div>
            <Table>
                <THead>
                    <Tr>
                        <Th>شرکت</Th>
                        <Th>تماس</Th>
                        <Th>کشور</Th>
                    </Tr>
                </THead>
                <TBody>
                    <Tr>
                        <Td>الفردز فوترکیست</Td>
                        <Td>ماریا آندرز</Td>
                        <Td>آلمان</Td>
                    </Tr>
                    <Tr>
                        <Td>مرکز خرید موکتزوما</Td>
                        <Td>فرانسیسکو چانگ</Td>
                        <Td>مکزیک</Td>
                    </Tr>
                    <Tr>
                        <Td>ارنست هندل</Td>
                        <Td>رولند مندل</Td>
                        <Td>اتریش</Td>
                    </Tr>
                </TBody>
            </Table>
        </div>
    )
}

export default Simple
