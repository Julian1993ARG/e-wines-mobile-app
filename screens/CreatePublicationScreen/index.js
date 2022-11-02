import CreatePubli from '../../src/components/CreatePubli'
import { Layout } from '@ui-kitten/components'

export default function CreatePublicationScreen ({ navigation }) {
  return (
    <Layout style={{ flex: 1 }}>
      <CreatePubli navigation={navigation} />
    </Layout>
  )
}
