import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BasketContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  background-color: #f5f5f5;
`

const BasketImage = styled.img`
  width: 100%;
`

const TextContainer = styled.div`
  width: 60%;
`

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  color: #212121;
`

const Subheading = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #212121;
`

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #707070;
`

const Basket = styled.div`
  width: 40%;
  margin-right: 20px;
`

const Brands = styled.div`
  margin-bottom: 20px;
`

const Timer = styled.div`
  display: flex;
  flex-direction: row;
`

const TimerText = styled.p`
  font-size: 24px;
  margin: 0 5px;
  color: #212121;
`

const Separator = styled.hr`
  margin: 0 10px;
  border: 1px solid #ddd;
`

function RecipeoftheDay() {
    const [recipe, setRecipe] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const apiUrl = 'https://apis-new.foodoscope.com/recipe/recipeOftheDay';
            const apiKey = '5gtCRn6CMFkrTs6p2RSyfUcuD_-lSfTznLlnxSxdSZgsDnZk';

            try {
                const res = await axios.get(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                    }
                });
                setRecipe(res.data);
                console.log(res.data.payload);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchData();

    }, []);
    return (
        <BasketContainer>
            <Basket>
                <BasketImage src="/images/basket.png" alt="Basket of vegetables" />
            </Basket>
            <TextContainer>
                <Title>Deal Of The Week</Title>
                <Subheading>Eat Healthier</Subheading>
                <Description>{recipe.description}</Description> {/* Use recipe state directly */}
                <Brands>
                    <h3>We Have Brands</h3>
                    <Description>
                        Modi tempora incidunt ut labore dolore magna aliquam.
                    </Description>
                </Brands>
                <Timer>
                    <TimerText>01</TimerText>
                    <TimerText>days</TimerText>
                    <TimerText>03</TimerText>
                    <TimerText>min</TimerText>
                    <TimerText>35</TimerText>
                    <TimerText>sec</TimerText>
                    <Separator />
                    <TimerText>17</TimerText>
                    <TimerText>hr</TimerText>
                </Timer>
            </TextContainer>
        </BasketContainer>
    );
}

export default RecipeoftheDay;