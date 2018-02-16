import React from 'react'
import Card, { CardMedia, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Grid from 'material-ui/Grid'
import withRoot from '../components/withRoot'
import Masonry from 'react-masonry-component'
import ProfileCard from '../components/ProfileCard'
import ListCard from '../components/ListCard'
import { eventsData } from '../data/listData'

const styles = theme => ({
  white: {
    color: '#fff'
  },
  card: {
    width: '100%'
  },
  media: {
    minHeight: 280
  },
  gridItemFix: {
    width: '100%',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px'
    }
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'start'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: 0
  },
  avatarBig: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px'
    }
  },
  listItemTextBig: {
    fontSize: '34px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  videoIframe: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    border: 'none'
  },
  videoIframeContainer: {
    width: '100%',
    height: 0,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '56.25%'
  }
})

const IndexPage = ({ classes }) => (
  <Layout>
    <Hero
      backgroundImg="../static/img/biology-students.jpg"
      titleText="Franciscan University of Steubenville"
      subtitleText="Academically Excellent, Passionately Catholic"
      primaryBtnText="Apply"
      primaryBtnLink="https://franciscanuniversity.force.com/portal"
      secondaryBtnText="Inquire"
      secondaryBtnLink="https://franciscan.secure.force.com/form?formid=217772"
      tertiaryBtnText="Visit"
      tertiaryBtnLink="https://franciscan.secure.force.com/events"
    />
    <div className={classes.heroCards}>
      <Masonry>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
            <iframe
              className={classes.videoIframe}
              src="https://www.youtube.com/embed/HpzwoD2oVSQ?modestbranding=1&rel=0&color=white"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <ListCard listTitle="Events" itemsArray={eventsData} />
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="display1">
                15 to 1 Student to Faculty Ratio!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <ProfileCard
            profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Students/Noah_Fisher_landing_v2.jpg"
            profileImgTitle="Noah Fisher"
            profileType="Student Profile"
            profileName="Noah Fisher"
            content="I first learned about Franciscan from some people at my parish
                who studied here. They recommended I check it out, but I wasn’t
                so sure. When I visited, though, I was blown away by the people
                I met; they were so genuine and helpful. They were the biggest
                reason I decided to come to Franciscan."
            profileLink="/studentprofiles/noah-fisher"
          />
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/adventure2-400w.jpg"
              title="Austria Campus"
            />
          </Card>
        </Grid>

        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
            <iframe
              className={classes.videoIframe}
              src="https://www.youtube.com/embed/HzfPBp3lHTU?modestbranding=1&rel=0&color=white"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
          </Card>
        </Grid>
      </Masonry>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
