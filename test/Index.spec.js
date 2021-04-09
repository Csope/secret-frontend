import { shallowMount } from '@vue/test-utils'
import Secret from '@/components/Secret.vue'

describe('Secret', () => {
  it('renders a response', () => {
    const wrapper = shallowMount(Secret, {
      propsData: {
        response: '{"errors":"Secret not found"}'
      }
    })

    expect(wrapper.props('response')).toBe('{"errors":"Secret not found"}')
  })
})

