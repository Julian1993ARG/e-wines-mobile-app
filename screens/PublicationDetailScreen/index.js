
import { useState } from 'react'
import { addCarrito } from '../../src/store/actions'
import { useDispatch } from 'react-redux'
import { View, ImageBackground, ScrollView } from 'react-native'
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet
} from '@ui-kitten/components'

export default function PublicationDetailScreen ({ route }) {
  const dispatch = useDispatch()
  const { title, name, price, count, image, cellar, origin, varietal, description, id } = route.params // eslint-disable-line
  const [comment, setComment] = useState()
  const styles = useStyleSheet(themedStyles)

  const onBuyButtonPress = () => {

  }
  const onAddButtonPress = () => {
    dispatch(addCarrito({ id, title, name, price, count, image, cellar, origin, varietal, description, cant:1 })) // eslint-disable-line
  }

  return (
    <ScrollView>
      <Layout style={styles.header}>
        <ImageBackground style={styles.image} source={{ uri: image }} />
        <Layout
          style={styles.detailsContainer}
          level='1'
        >
          <Text category='h6'>{title}</Text>
          <Text
            style={styles.subtitle}
            appearance='hint'
            category='p2'
          >
            {varietal}
          </Text>
          <Text
            style={styles.price}
            category='h4'
          >
            {price.toLocaleString()} ARS
          </Text>
          <Text
            style={styles.description}
            appearance='hint'
          >
            {description}
          </Text>
          <Text
            style={styles.sectionLabel}
            category='h6'
          >
            Cellar:
          </Text>
          <Text
            style={styles.size}
            appearance='hint'
          >
            {cellar}
          </Text>
          <Text
            style={styles.sectionLabel}
            category='h6'
          >
            Origin:
          </Text>
          <Text
            style={styles.size}
            appearance='hint'
          >
            {origin}
          </Text>
          <View style={styles.actionContainer}>
            <Button
              style={styles.actionButton}
              size='giant'
              onPress={onBuyButtonPress}
            >
              BUY
            </Button>
            <Button
              style={styles.actionButton}
              size='giant'
              status='control'
              onPress={onAddButtonPress}
            >
              ADD TO BAG
            </Button>
          </View>
        </Layout>
        <Input
          style={styles.commentInput}
          label={evaProps => <Text {...evaProps} style={styles.commentInputLabel}>Comments</Text>}
          placeholder='Write your comment'
          value={comment}
          onChangeText={setComment}
        />
      </Layout>
    </ScrollView>
  )
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2'
  },
  commentList: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  header: {
    marginBottom: 8
  },
  image: {
    height: 340,
    width: '100%'
  },
  detailsContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16
  },
  subtitle: {
    marginTop: 4
  },
  price: {
    position: 'absolute',
    top: 24,
    right: 16
  },
  description: {
    marginVertical: 16
  },
  size: {
    marginBottom: 16
  },
  colorGroup: {
    flexDirection: 'row',
    marginHorizontal: -8
  },
  colorRadio: {
    marginHorizontal: 8
  },
  actionContainer: {
    flexDirection: 'row',
    marginHorizontal: -8,
    marginTop: 24
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8
  },
  sectionLabel: {
    marginVertical: 8
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: 'text-basic-color'
  },
  commentInput: {
    marginHorizontal: 16,
    marginVertical: 24
  }
})
